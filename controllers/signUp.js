const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");


const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(email);
    if (!email || !password) {
      res.status(400).send({ msg: "Please pass email and password." });
    } else {
      const newUser = await prisma.user.create({
        data: { email: email, name: name, password: hashedPassword },
      });
      res.json(newUser);
    }
  } catch (error) {
    res.status(500).send({error, message: 'Failure!'});
  }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
          include: { envelopes: true }
        });
        console.log(users);
        if (!users) {
          res.send("There are no users");
        }
        res.json(users); 
    } catch (error) {
        res.status(500).send(error);
    }
}

const findUserById = async (id) => {
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });

  return user;
};

const findUserByEmail = async (email) => {
    const user = await prisma.user.findFirst({
      where: { email: email},
    });
  
    return user;
  };

const verifyUser = async (email) => {
  const user = await prisma.user.findFirst({
    where: { email: email },
  });
  return user;
};

module.exports = { signUp, findUserById, verifyUser, getAllUsers , findUserByEmail};
