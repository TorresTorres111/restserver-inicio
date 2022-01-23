
// imports
const { request, response } = require( 'express' );


// getUsuarios
const getUsuarios = ( req = request, res = response ) => {

    res.json({ msg: 'get /usuarios' });

};


// postUsuarios
const postUsuarios = ( req = request, res = response ) => {

    res.json({ msg: 'post /usuarios' });

};


// putUsuarios
const putUsuarios = ( req = request, res = response ) => {

    res.json({ msg: 'put /usuarios' });

};


// deleteUsuarios
const deleteUsuarios = ( req = request, res = response ) => {

    res.json({ msg: 'delete /usuarios' });

};


// exports
module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
};