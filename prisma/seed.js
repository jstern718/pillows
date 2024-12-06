import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
dotenv.config()

const prisma = new PrismaClient()

async function main() {
//   const admin = await prisma.user.create({
//     data: {
//       email: process.env.EMAIL || 'email@example.com',
//       password: process.env.PASSWORD || 'password',
//       name: 'Admin',
//     },
//   })

  const post = await prisma.post.create({
    data: {
      title: 'MostPopular',
      numberLines: 3,
    },
  })

  const line1 = await prisma.line.create({
    data: {
      lineNumber: 1,
      content: 'The most popular pillows on Amazon are all on the      fluffy/high side. They are best for people who like to sleep on their backs - Some side sleepers might like them, but only if they need a higher pillow.',
    },
  })

  const line2 = await prisma.line.create({
    data: {
      lineNumber: 2,
      content: 'All of these pillows are popular because they offer a good deal and come in packs of two. If you prefer fluffy pillows, and/or you need to buy a lot of pillows while furnishing a new house, these will be a good option for you.',
    },
  })

  const line3 = await prisma.line.create({
    data: {
      lineNumber: 3,
      content: "If you aren't too concerned about price, see our list of the best fluffy pillows.",
    },
  })

  const pillow1 = await prisma.pillow.create({
    data: {
      intro: 'The Most Popular (Super Fluffy) Pillow Set',
      title: 'Beckham Hotel Collection Bed Pillows',
      content: 'The Beckham Hotel Collection Bed Pillows (standard/queen) (which come in sets of 2) are down alternative pillows with 100% polyester filling and a 250 thread count cotton cover. They are about 4 1/2 inches thick.',
      link: 'https://amzn.to/4eUVyfQ',
      rank: 1,
    },
  })

  const pillow2 = await prisma.pillow.create({
    data: {
      intro: 'A Popular Gusseted Pillow Set (that is also affordable and fluffy)',
      title: 'Utopia Bedding Bed Pillows',
      content: 'The Utopia Bedding Bed Pillows (queen) (which come in sets of 2) are down alternative pillows with polyester fill, a 200 thread count polycotton cover, and 2 inch gussets with corded edges. They are approximately 7 or 8 inches thick.',
      link: 'https://amzn.to/3A4Hcuq',
      rank: 2,
    },
  })

  const pillow3 = await prisma.pillow.create({
    data: {
      intro: 'A Popular Adjustable Memory Foam Pillow For People Who Want More Support (and who don\'t sleep too hot)',
      title: 'Coop Home Goods Original Adjustable Pillow',
      content: 'The Coop Home Goods Original Adjustable Pillow (queen) is made with cross cut memory foam. It has an outer cover made of polyester (60%) and rayon (40%). It\'s thickness is measured at 8 inches.',
      link: 'https://amzn.to/3YkqfFX',
      rank: 3,
    },
  })

  const pillow4 = await prisma.pillow.create({
    data: {
      intro: 'A Very Affordable Down Alternative Pillow That is Astonishingly Fluffy',
      title: 'Bedsure Down Alternative Pillows',
      content: 'The Bedsure Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester microfiber cover and a 100% polyester microfiber fill. They are approximately 9 1/2 inches thick.',
      link: 'https://amzn.to/482LPC7',
      rank: 4,
    },
  })

  const pillow5 = await prisma.pillow.create({
    data: {
      intro: 'Another Gusseted Pillow Set That Is Also Affordable',
      title: 'Viewstar Down Alternative Pillows',
      content: 'The Viewstar Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester cover and a microfiber fill. They have a gusseted design.',
      link: 'https://amzn.to/3zVd30K',
      rank: 5,
    },
  })

  const pillowsInPosts1 = await prisma.pillowsInPosts.create({
    data: {
      pillowId: pillow1.id,
      postId: post.id,
    },
  })

  const pillowsInPosts2 = await prisma.pillowsInPosts.create({
    data: {
      pillowId: pillow2.id,
      postId: post.id,
    },
  })

  const pillowsInPosts3 = await prisma.pillowsInPosts.create({
    data: {
      pillowId: pillow3.id,
      postId: post.id,
    },
  })

  const pillowsInPosts4 = await prisma.pillowsInPosts.create({
    data: {
      pillowId: pillow4.id,
      postId: post.id,
    },
  })

  const pillowsInPosts5 = await prisma.pillowsInPosts.create({
    data: {
      pillowId: pillow5.id,
      postId: post.id,
    },
  })

  const linesInPost1 = await prisma.linesInPost.create({
    data: {
      lineId: line1.id,
      postId: post.id,
    },
  })

  const linesInPost2 = await prisma.linesInPost.create({
    data: {
      lineId: line2.id,
      postId: post.id,
    },
  })

  const linesInPost3 = await prisma.linesInPost.create({
    data: {
      lineId: line3.id,
      postId: post.id,
    },
  })

  console.log("seed complete", { post, line1, pillow1})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })