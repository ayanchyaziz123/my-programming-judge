const Problem = require('../models/problem');

const fs = require('fs');


const readfile = (data) => {
    const a= data;
    try {
        var relFilePath = './public/uploads' + '/' + a;
        const data = fs.readFileSync(relFilePath, 'utf8');
        console.log(data);
        console.log('------')
    } catch (err) {
        console.error(err);
    }

}


exports.getProblem = async (req, res, next) => {
    try {
        const problem = await Problem.findById(req.params.id);
        readfile(problem.prb_inputTestCase)
        return res.status(200).json({
            problem: problem,
            message: "Successfullhy fetch"
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            detail: "serevr error. Could not retrive the data!!!"
        });
    }
}


exports.createProblem = async (req, res, next) => {

    try {
        const { prb_tags, prb_name, prb_description, prb_difficultyLevel, prb_points, prb_editorial } = req.body;
        if (!req.files.prb_inputTestCase[0].filename) return res.status(400).json({
            detail: "You did not provide imput testcase",
        });
        if (!req.files.prb_outputTestCase[0].filename) return res.status(400).json({
            detail: "You did not provide output testcase",
        });
        if (!prb_name) return res.status(400).json({
            detail: "You did not provide problem name",
        });
        if (!prb_tags) return res.status(400).json({
            detail: "You did not provide problem tags",
        });
        if (!prb_description) return res.status(400).json({
            detail: "You did not provide problem description",
        });
        if (!prb_difficultyLevel) return res.status(400).json({
            detail: "You did not provide problem difficulty level",
        });
        if (!prb_points) return res.status(400).json({
            detail: "You did not provide problem points",
        });
        if (!prb_editorial) return res.status(400).json({
            detail: "You did not provide problem editorial",
        });

        var input = req.files.prb_inputTestCase[0].filename;
        var output = req.files.prb_outputTestCase[0].filename
        const problem = new Problem({
            prb_tags,
            prb_name,
            prb_description,
            prb_difficultyLevel,
            prb_points,
            prb_editorial,
            prb_inputTestCase: input,
            prb_outputTestCase: output

        })

        try {
            await problem.save();
            console.log("success");
            return res.status(200).json({
                message: "Successfully added question",
                problem: problem
            })

        }
        catch (error) {
            return res.status(400).json({
                detail: "Serever error occured!",
            })
        }

    }
    catch (error) {
        return res.status(400).json({
            detail: "Serever error occured!",
        })
    }
}

exports.retrieveAllProblems = async (req, res, next) => {
    try {
        const problems = await Problem.find();
        return res.status(200).json({
            message: "Data successfully loaded",
            problems: problems
        })
    }
    catch (error) {
        return res.status(400).json({
            detail: "Serever error occured!",
        })
    }
}