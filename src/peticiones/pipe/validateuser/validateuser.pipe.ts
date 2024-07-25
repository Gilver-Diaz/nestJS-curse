import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);

    const ageNumber = parseInt(value.age.taString(), 10); // un valor entero

    if (isNaN(ageNumber)) {
      // si no es un dato entero me da el siguente sms
      throw new HttpException('age must be a number', HttpStatus.BAD_REQUEST); // aca me diria si es un dato erroneo !
    }
    return { ...value, age: ageNumber }; // si no todo va bien me dare este sms,
    // me daras todos los valores pedidos ,y ageNumber me dara la edad que ya viene convertido en entero!

    // CON ESTO LO QUE HACE EL PiPe ES RECIBIR UN VALOR CONVERTIRLO Y RETONARLO !
  }
}
