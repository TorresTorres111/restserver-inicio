
// imports
const { Router } = require( 'express' );
const { getUsuarios,
        postUsuarios,
        putUsuarios,
        deleteUsuarios } = require( '../controllers/usuarios' );


// router
const router = Router();


// get /usuarios
router.get( '/usuarios', getUsuarios );


// post /usuarios
router.post( '/usuarios', postUsuarios );


// put /usuarios
router.put( '/usuarios', putUsuarios );


// delete /usuarios
router.delete( '/usuarios', deleteUsuarios );


// exports
module.exports = router;