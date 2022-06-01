const express = require("express");
const router = express.Router();
const {doctors, keywords} = require("./model")

router.get("/doctorsList", async (req, res) => {
    try {const query = req.query;
    const search = req.query.search;
    const filter = {};
    for(const key in query){
        switch (key){
            case "specialization":
                if(query[key] == "others") break;
                filter.specialization = query[key].toUpperCase();
                break;
            
            case "fee":
                filter.fee = {$lte:  parseInt(query[key])}
                break;
            
            case "education":
                if(query[key] == "others") break;
                filter.education = {$in: [query[key]]}
                break;

            case "search": 
                filter.$or = [  {name : {$regex: new RegExp(`\\b${search}`, "i") }},
                                {keywords : {$in:  [new RegExp(`\\b${search}`, "i") ]}},
                                {education : {$in: [new RegExp(`\\b${search}`, "i") ]}},
                                {designation : {$in:[new RegExp(`\\b${search}`, "i") ]}},
                ]
                break;
            
            default :
                break;
            
    }}
    
        const list = await doctors.find(filter);

        res.send(JSON.stringify(list));
    
    }catch(err){
        console.log(err)
    }
})


router.get("/search", async (req, res)=> {
    try{
        const search = req.query.search;
        const Result1 = await keywords.find({
            word : {$regex: new RegExp(`\\b${search}`, "i") }
        });
        const Result2 = await doctors.find({
            name : {$regex: new RegExp(`\\b${search}`, "i") }
        });
        const searchResult = [...Result1, ...Result2]

        res.send(JSON.stringify(searchResult));
    }catch(err){
        console.log(err);
    }
})
module.exports = router;