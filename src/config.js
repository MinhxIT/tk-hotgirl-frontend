export default {
    rootPath:
    process.env.REACT_APP_STATE === 'localhost'
    ?'http://localhost:6969'
    :'https://tk-hotgirl17.herokuapp.com'
};