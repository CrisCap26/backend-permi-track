import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncidenciasModule } from './incidencias/incidencias.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [IncidenciasModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
