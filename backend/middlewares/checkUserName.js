module.exports = (req, res, next) => {
    const nameTrue = (userName) => {
      let regex = /^(?=.*?[A-Za-z]).{3,}$/;
      let regexTrue = regex.test(userName);
      regexTrue ? next() : res.status(200).json({
            type: "error",
            message: "Vérifiez votre nom: au moins 3 caractères. 20 max !",
          });
    };
    nameTrue(req.body.userName);
  };

  