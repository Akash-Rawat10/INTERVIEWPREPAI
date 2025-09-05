const Session=require("../models/Session");
const Question=require("../models/Question");

//@desc  Create a new session and linked questions
//@route POST/api/sessions/create
//@access Private
exports.createSession=async(req,res)=>{
    try{
        const{role,experience, topicsToFocus, description, questions}=req.body;
        const userId=req.user.id;

        const session=await Session.create({
            user:userId,
            role,
            experience,
            topicsToFocus,
            description,
        });

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session: session._id,
                    question:q.question,
                    answer:q.answer
                });
                return question._id;
            })
        );

        session.questions = questionDocs;
        await session.save();

        res.status(201).json({ message: "Session created", success: true, session });
    }
    catch(error){
        res.status(500).json({ message: "Server error", success: false });
    }
};

//@desc  Get all sessions for the logged-in user
//@route GET/api/sessions/my-sessions
//@access Private
exports.getMySessions=async(req,res)=>{
    try{
        const sessions=await Session.find({user:req.user.id})
        .sort({createdAt:-1})
        .populate("questions");
        
        res.status(200).json({ sessions, success: true } );

    }
    catch(error){
        res.status(500).json({ message: "Server error", success: false });
    }
   
};

//@desc Get a session by ID with populated questions
//@route GET/api/sessions/:id
//@access Private
exports.getSessionById=async(req,res)=>{
    try{
        const session=await Session.findById(req.params.id)
        .populate({
            path: "questions",
            options:{sort: {isPinned: -1, createdAt:1}},
        })
        .exec();

        if(!session){
            return res
            .status(404)
            .json({ message: "Session not found", success: false });
        }

        res.status(200).json({ session, success: true });
    }
    catch(error){
        res.status(500).json({ message: "Server error", success: false });
    }
  
};

//@desc Delete a session and its questions
//@route DELETE/api/sessions/:id
//@access Private
exports.deleteSession=async(req,res)=>{
    try{
        const session=await Session.findById(req.params.id);

        if(!session){
            return res
            .status(404)
            .json({ message: "Session not found", success: false });
        }
      
        //check if the logged-in user owns this session
        if(session.user.toString()!==req.user.id){
            return res
            .status(401)
            .json({ message: "Not authorized to delete this session"});
        }
        //first delete all questions linked to this session
        await Question.deleteMany({session:session._id});

        //Then delete the session
        await session.deleteOne();

        res.status(200).json({ message: "Session deleted successfully", success: true });

    }
    catch(error){
        res.status(500).json({ message: "Server error", success: false });
    }
   
};
