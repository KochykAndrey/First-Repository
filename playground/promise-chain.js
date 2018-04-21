// 2017
const promise = new Promise(
    (resolve, reject) => {
        setTimeout(resolve(13), 200);
    })
    .then(superNumber => {
        return Promise.resolve([13,666]); // return axios.get(`/test/${superNumber}`)
    })
    .then(marks => {
        ...
    })
    .catch(error => {
        res.status(505).send();
    })
// 2018
try
{
const user = await axios.get('/user/13'); // 2009 -> 2017
const marks = await axios.get('/user/marks/');
}
catch(error) {

}
