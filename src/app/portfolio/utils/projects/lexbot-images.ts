import { CarouselImage } from '../../../shared/interfaces/carousel-image.interface';

export const lexbotImages: CarouselImage[] = [
  {
    src: 'assets/images/projects/lexbot/login.webp',
    alt: 'Inicio de sesión',
    description:
      'Pantalla de inicio de sesión donde los usuarios pueden acceder a su cuenta por email o por Google',
  },
  {
    src: 'assets/images/projects/lexbot/singup.webp',
    alt: 'Registro de nuevo usuario',
    description: 'Formulario de registro para nuevos usuarios que desean utilizar LexBot',
  },
  {
    src: 'assets/images/projects/lexbot/rightofpetition.webp',
    alt: 'Interfaz para generar un documento legal',
    description:
      'Chat dinámico que solicita los datos para redactar el documento legal seleccionado',
  },
  {
    src: 'assets/images/projects/lexbot/rightofpetition-1.webp',
    alt: 'Generación del documento en formato PDF',
    description:
      'Finalización del chat y generación del documento en formato PDF listo para descargar y revisar',
  },
  {
    src: 'assets/images/projects/lexbot/newchat.webp',
    alt: 'Nuevo chat',
    description:
      'Interfaz de chat donde el usuario puede iniciar una nueva conversación con el asistente legal',
  },
  {
    src: 'assets/images/projects/lexbot/newchat-1.webp',
    alt: 'Conversación con LexBot tras iniciar un nuevo chat',
    description:
      'Respuesta del asistente luego de que el usuario enviara un mensaje en el nuevo chat',
  },
  {
    src: 'assets/images/projects/lexbot/newchat-2.webp',
    alt: 'Respuesta extendida del asistente tras iniciar un nuevo chat',
    description:
      'Continuación de la respuesta del asistente luego de iniciar un chat en la imagen anterior',
  },
  {
    src: 'assets/images/projects/lexbot/continuechat.webp',
    alt: 'Continuar chat antiguo',
    description:
      'Acceso al historial de conversaciones guardadas, permitiendo retomar chats previos',
  },
  {
    src: 'assets/images/projects/lexbot/deletechat.webp',
    alt: 'Eliminar chat',
    description:
      'Opción dentro de la gestión de chats que permite al usuario eliminar un chat definitivamente',
  },
  {
    src: 'assets/images/projects/lexbot/deletechat-1.webp',
    alt: 'Ventana de confirmación para eliminar un chat',
    description:
      'Control de seguridad que solicita confirmación antes de borrar permanentemente una conversación',
  },
  {
    src: 'assets/images/projects/lexbot/logout.webp',
    alt: 'Cerrar sesión',
    description: 'Finalización segura de la sesión del usuario',
  },
  {
    src: 'assets/images/projects/lexbot/logout-1.webp',
    alt: 'Confirmación para cerrar sesión',
    description: 'Control de seguridad que solicita confirmación antes de cerrar la sesión',
  },
];
