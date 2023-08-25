import { getRepository } from "typeorm";
import { Usuario } from "../entities/Usuario";

type UsuarioResquest = {
    nome: string;
    email: string;
    senha: string;
};


export class CreateUsuarioService {
    async execute({nome, email, senha}: UsuarioResquest) : Promise<Usuario | Error>{
     const repo = getRepository(Usuario);

     //Verificar se o nome já existe
   if (await repo.findOne({ nome })){
   
    return new Error("Nome já cadastrado");
}

   const usuario = repo.create({
         nome,
         email,
         senha
    });

    await repo.save(usuario);
    return usuario;
}

}












// export class CreateUsurarioService {
//   constructor() {
//     this.repository = void 0;
//     this.repository = (0, _typeorm.getRepository)(_Usuario.default);
//   }

//   async execute({
//     nome,
//     email,
//     senha
//   }) {
//     const userExists = await this.repository.findOne({
//       where: {
//         email
//       }
//     });

//     if (userExists) {
//       throw new Error('Email já cadastrado');
//     }

//     const user = this.repository.create({
//       nome,
//       email,
//       senha
//     });
//     await this.repository.save(user);
//     return user;
//   }

// }