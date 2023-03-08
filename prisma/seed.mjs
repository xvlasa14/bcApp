import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.upsert({
        where: { id: 1 },
        update: {},
        create: {
            login: 'user1',
            password: 'password1'
        }
    });

    const doctor = await prisma.doctor.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'doctor',
            surname: 'theFirst',
            userId: 1
        }
    });

    const patient1 = await prisma.patient.upsert({
        where: { id: 1 },
        update: {},
        create: {
            birthday: new Date("1998-06-01"),
            sex: 'female',
            education: 'High School',
            doctorId: 1
        }
    });

    const patient2 = await prisma.patient.upsert({
        where: { id: 2 },
        update: {},
        create: {
            birthday: new Date("2000-06-01"),
            sex: 'male',
            doctorId: 1
        }
    });

    const diagnosis1 = await prisma.diagnosis.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'diagnosis1',
            code: 'F100'
        }
    });

    const diagnosis2 = await prisma.diagnosis.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'diagnosis2',
            code: 'F101'
        }
    });

    const diagnosis3 = await prisma.diagnosis.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'diagnosis3',
            code: 'F102'
        }
    });

    const record1 = await prisma.record.upsert({
        where: { id: 1 },
        update: {},
        create: {
            description: 'lorem ipsum dolor sit amet',
            patientId: 1,
            diagnosisId: 3
        }
    });

    const record2 = await prisma.record.upsert({
        where: { id: 2 },
        update: {},
        create: {
            description: 'lorem ipsum dolor sit amet blueberry',
            patientId: 1,
            diagnosisId: 3
        }
    });

    const record3 = await prisma.record.upsert({
        where: { id: 3 },
        update: {},
        create: {
            description: 'strawberry',
            patientId: 2,
            diagnosisId: 2
        }
    });

    const test1 = await prisma.test.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'test1', 
            category: 'category1'
        }
    });

    const part1 = await prisma.part.upsert({
        where: { id: 1 },
        update: {},
        create: {
            title: 'part1',
            testId: 1
        }
    });

    const norm1 = await prisma.norm.upsert({
        where: { id: 1 },
        update: {}, 
        create: {
            rangeLeft: 12,
            rangeRight: 20,
            deviation: 0.2,
            median: 4,
            partId: 1
        }
    });

    const part2 = await prisma.part.upsert({
        where: { id: 2 },
        update: {},
        create: {
            title: 'part2',
            testId: 1
        }
    });

    const norm2 = await prisma.norm.upsert({
        where: { id: 2 },
        update: {}, 
        create: {
            rangeLeft: 21,
            rangeRight: 40,
            deviation: 0.2,
            median: 4,
            partId: 2
        }
    });

    const test2 = await prisma.test.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'test2', 
            category: 'category2'
        }
    });

    const part3 = await prisma.part.upsert({
        where: { id: 3 },
        update: {},
        create: {
            title: 'part3',
            testId: 2
        }
    });

    const norm3 = await prisma.norm.upsert({
        where: { id: 3 },
        update: {}, 
        create: {
            rangeLeft: 12,
            rangeRight: 25,
            deviation: 0.2,
            median: 4,
            partId: 3
        }
    });

    const norm4 = await prisma.norm.upsert({
        where: { id: 4 },
        update: {}, 
        create: {
            rangeLeft: 26,
            rangeRight: 40,
            deviation: 0.2,
            median: 5,
            partId: 3
        }
    });

    const exam1 = await prisma.exam.upsert({
        where: { id: 1 },
        update: {},
        create: {
            date: new Date("2022-06-05"),
            patientId: 1,
            testId: 1
        }
    });

     const result1 = await prisma.result.upsert({
        where: { id: 1 },
        update: {},
        create: {
            partId: 1,
            examId: 1,
            testId: 1,
            result: 13
        }
    });

     const result2 = await prisma.result.upsert({
        where: { id: 2 },
        update: {},
        create: {
            partId: 2,
            examId: 1,
            testId: 1,
            result: 50
        }
    });

    const exam2 = await prisma.exam.upsert({
        where: { id: 2 },
        update: {},
        create: {
            date: new Date("2019-06-01"),
            patientId: 1,
            testId: 2
        }
    });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });