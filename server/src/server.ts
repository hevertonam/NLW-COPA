// import Fastify from 'fastify'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import{PrismaClient} from '@prisma/client'
//cria o cors


const prisma = new PrismaClient({
    log: ['query'],
    //dar log de todas as query do banco de dados
})

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
        //fastify solta log de tudo que acontece na aplicação

    })

    await fastify.register(cors, {
        origin:true, //permite que qualquer aplicação acesse o back end
    })
//http://localhost:3333/pools/count

    fastify.get('/pools/count', async ()=>{
        const count = await prisma.pool.count({
            where:{
                code:{
                    startsWith:'H'
                    //começa com a letra D
                }
            }
        })

        return{count}
    })

    await fastify.listen({port: 3333, /*host: '0.0.0.0'*/})

}

bootstrap()