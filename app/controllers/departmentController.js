const Department=require('../models/department')

module.exports.list= (req,res) =>{
    Department.find()
    .then((customer) =>{
        res.json(customer)
    })

}

module.exports.show=(req,res) =>{
    const id=req.params.id
    Department.findById(id)
        .then((department) =>{
            res.json(department)
        })
        .catch((err) =>{
            res.json(err)
        })

}

module.exports.create=(req,res) =>{
    const data=req.body
    const department=new Department(data)
    department.save()
    .then((department) =>{
        res.json(department)
    })
    .catch((err) =>{
        res.json(err)
    })
}

module.exports.update=(req,res) =>{
    const id=req.params.id
    const body=req.body
    Department.findByIdAndUpdate(id,{ $set: body }, { new: true, runValidators: true })
     .then((department) =>{
         res.json(department)
     })
     .catch(err =>{
         res.json(err)
     })
     
    }

    module.exports.destroy = (req, res) => {
        const id = req.params.id
        Department.findByIdAndDelete(id)
            .then(department => {
                if (department) {
                    res.json(department)
                } else {
                    res.status('404').json({})
                }
            })
            .catch(err => {
                res.json(err)
            })
    }
    