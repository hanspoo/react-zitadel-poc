import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const response = await prisma.prismaProduct.findMany({
      where: {
        organizationId: req.org.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await prisma.prismaProduct.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;

  try {
    const product = await prisma.prismaProduct.create({
      data: {
        name: name,
        price: price,
        organizationId: req.org.id,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  console.log('Actualizando producto');
  console.log(req.org);
  const { name, price } = req.body;
  try {
    const product = await prisma.prismaProduct.update({
      where: {
        id: Number(req.params.id),
        organizationId: req.org.id,
      },
      data: {
        name: name,
        price: price,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await prisma.prismaProduct.delete({
      where: {
        id: Number(req.params.id),
        organizationId: req.org.id,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
