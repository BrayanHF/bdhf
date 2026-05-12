import { ProjectEntry } from '../../shared/interfaces/project.interface';
import { ANDROID, ANGULAR, FIREBASE, KOTLIN, SPRING } from './techs';

export const project_list: ProjectEntry[] = [
  {
    title: 'LexBot',
    category: 'Full Stack',
    description:
      'Creé una plataforma para simplificar trámites legales en Colombia, un chatbot con capacidades de búsqueda avanzada en internet para ofrecer asesoría jurídica veraz y vigente. La característica principal es su constructor de documentos guiado, el bot lidera una conversación estructurada para extraer los datos necesarios y generar automáticamente documentos legales basicos',
    techs: [SPRING, ANGULAR, FIREBASE],
    route: 'project/lexbot',
  },
  {
    title: 'Ganecamp',
    category: 'Android',
    description:
      'Desarrollé una solución móvil para digitalizar el control de ganado en una finca. La app reemplaza el registro manual en cuaderno, que es como se venia haciendo tradicionalmente, por un sistema automatizado que identifica a cada animal mediante etiquetas RFID.',
    techs: [KOTLIN, ANDROID, FIREBASE],
    route: 'project/ganecamp',
  },
];
