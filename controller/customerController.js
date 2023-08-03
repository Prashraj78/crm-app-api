
const customers= [
  
    {
        "name":"Infosys",
        "website":"www.infosys.com",
        "ceo":"Uknown",
        "employees":"200000",
        "year":"1995",
        "turnover":"100000000"
    },
    {
        "name":"TCS",
        "website":"www.tcs.com",
        "ceo":"Uknown",
        "employees":"300000",
        "year":"1995",
        "turnover":"200000000"
    },
    {
        "name": "Accenture",
        "website": "www.accenture.com",
        "ceo": "Uknown",
        "employees": "2330894",
        "year": "1878",
        "turnover": "53000000"
    }

  ];

module.exports.get = (req, res)=>{
    const page = req.params.page;
    const obj = {
        "records": customers.slice((page-1)*100,100*page),
        "totalCount":customers.length
    }
    res.status(200).send(obj);
}

module.exports.getByName = (req, res)=>{
  const name = req.params.name;
  const result = customers.find(c=> c.name==name);
  if(!result){
    return res.status(404).send();
  }
  return res.status(200).send(result);
}

module.exports.add = (req, res)=>{
    const customer = req.body;
    customers.push(customer);
    res.status(200).send(customers);
}


module.exports.getAll = (req, res)=>{
  res.status(200).send(customers);
}


module.exports.update = (req, res)=>{
    const customer = req.body;
    let foundCustomerIndex = customers.findIndex(c=> c._id==customer._id);
    console.log(foundCustomerIndex);
    console.log(customer);
    customers[foundCustomerIndex]=customer;
    res.status(200).send(customers);
}

module.exports.delete = (req, res)=>{
    const name = req.params.name;
    let foundCustomerIndex = customers.findIndex(c=> c.name==name);
    customers.splice(foundCustomerIndex, 1);
    console.log(customers);
    res.status(200).send(customers);
}

