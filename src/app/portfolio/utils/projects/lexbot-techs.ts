import { Tech } from '../../../shared/interfaces/tech.interface';

export const LEXBOT_ANGULAR: Tech = {
  name: 'Angular',
  localImage: '/assets/icons/angular.svg',
  description: `Escogí Angular porque ya tengo bastante experiencia trabajando con él y me gusta mucho la forma
  en la que organiza los proyectos. Todo queda muy modular y ordenado, lo cual ayuda bastante cuando el proyecto empieza
  a crecer. Además, como en el backend estaba trabajando con Spring WebFlux, trabajar de forma reactiva en Angular fue
  muy cómodo gracias a RxJS y Signals, haciendo mucho más fácil manejar estados, peticiones y actualizaciones en tiempo real.`,
};

export const LEXBOT_TAILWIND: Tech = {
  name: 'Tailwind',
  localImage: '/assets/icons/tailwind.svg',
  description: `No quise complicarme demasiado escribiendo CSS o SCSS manualmente. La idea del proyecto era poder
  avanzar rápido y mantener un diseño limpio sin perder tanto tiempo en estilos. Tailwind ayudó muchísimo con eso,
  porque permite construir interfaces modernas y responsivas directamente desde las clases en el html, haciendo el
  desarrollo más rápido, sencillo y cómodo.`,
};

export const LEXBOT_SPRING_BOOT: Tech = {
  name: 'Spring Boot',
  localImage: '/assets/icons/spring.svg',
  description: `Spring Boot fue la base de todo el backend porque Java es la tecnología con con la que más experiencia
  tengo y donde me siento más cómodo trabajando. Esta vez trabajé con Spring WebFlux y programación reactiva usando Flux
  y Mono, principalmente porque el proyecto hacía muchos llamados a APIs externas al mismo tiempo. Con WebFlux podía
  hacer varias peticiones en paralelo sin dejar procesos bloqueados mientras una API respondía, lo cual ayudó bastante
  al rendimiento y al flujo general de la aplicación. También facilitó mucho manejar procesos que debían ejecutarse
  mientras otras respuestas llegaban. Para la seguridad también fue bastante cómodo trabajar con JWT y la integración
  con Firebase Authentication usando el SDK de Google, haciendo muy sencilla la validación de usuarios y protección de
  endpoints.`,
};

export const LEXBOT_FIRESTORE: Tech = {
  name: 'Firebase Firestore',
  localImage: '/assets/icons/firebase-firestore.svg',
  description: `Firestore se utilizó para almacenar los chats y mensajes de los usuarios. Como la aplicación manejaba
  muchísimo texto y realmente no existían relaciones complejas más allá de usuario -> chats -> mensajes, no vi necesario
  usar una base de datos SQL. Firestore me pareció una muy buena opción NoSQL porque es rápida de configurar, muy fácil
  de conectar y prácticamente desde el inicio ya se tiene todo funcionando en la nube. Eso sí, integrar Firestore con
  WebFlux no fue tan cómodo porque el SDK maneja unas respuestas tipo promesas que no me gustaban mucho para trabajar
  de forma reactiva. Al final terminé creando métodos propios que convertían todo eso en Flux y Mono para integrarlo
  mucho mejor con el resto de la aplicación.`,
};

export const LEXBOT_FIREBASE_AUTH: Tech = {
  name: 'Firebase Authentication',
  localImage: '/assets/icons/firebase-auth.svg',
  description: `Firebase Authentication se utilizó principalmente para implementar el inicio de sesión con Google de
  una forma rápida y sencilla. La verdad es que hacerlo con Firebase facilita muchísimo todo el proceso de autenticación
  y además también permite trabajar fácilmente con JWT, lo que ayudó a mantener todas las peticiones protegidas sin
  tener que implementar un sistema de autenticación completo desde cero.`,
};

export const LEXBOT_OPENAI: Tech = {
  name: 'OpenAI API',
  localImage: '/assets/icons/openai.svg',
  description: `OpenAI se utilizó como una de las APIs principales para la generación de texto. Honestamente era la
  que mejores resultados daba, tanto respondiendo preguntas de los usuarios como generando documentos legales. Para los
  documentos se utilizaban modelos un poco más avanzados y para respuestas normales modelos más económicos, pero aun así
  el consumo seguía siendo bastante alto. Precisamente por eso también se terminó integrando DeepSeek como alternativa.`,
};

export const LEXBOT_DEEPSEEK: Tech = {
  name: 'DeepSeek API',
  localImage: '/assets/icons/deepseek.svg',
  description: `DeepSeek se integró principalmente por el tema de costos. Comparada con OpenAI era muchísimo más
  barata. De hecho, se compraron como 10 dólares en tokens para pruebas y después de muchísimas pruebas manuales y automáticas
  todavía sigue habiendo saldo. Sí se notaba diferencia entre ambas APIs, porque OpenAI entendía un poco mejor los
  problemas de los usuarios y las respuestas tendían a sentirse más naturales y mejor construidas. Aun así, DeepSeek
  funcionaba bastante bien y por la diferencia tan grande de precio terminó siendo la opción más usada durante el
  proyecto.`,
};

export const LEXBOT_TAVILY: Tech = {
  name: 'Tavily API',
  localImage: '/assets/icons/tavily.svg',
  description: `Tavily se utilizó para hacer búsquedas web y reducir un poco las alucinaciones de la inteligencia
  artificial. Mientras el usuario hablaba con el chat, el backend hacía búsquedas relacionadas en paralelo y luego esa
  información se enviaba junto al prompt hacia la IA. Para la generación de documentos también se hacían varias
  búsquedas relacionadas con el tipo de documento y la forma en la que la ley colombiana establece que debe redactarse.
  Gracias a eso, las respuestas podían tener información más actualizada y contextualizada.`,
};

export const LEXBOT_AWS_AMPLIFY: Tech = {
  name: 'AWS Amplify',
  localImage: '/assets/icons/aws-amplify.svg',
  description: `AWS Amplify se utilizó para desplegar el frontend desarrollado con Angular. Fue una de las partes más
  fáciles de configurar en todo el proyecto, ya que prácticamente el CI/CD con GitHub quedó funcionando casi solo.
  Además, Amplify ya incluye HTTPS automáticamente desde el principio y conectar el dominio lexbotapp.com fue súper
  rápido y sencillo. Gracias a esto se podían hacer despliegues automáticos cada vez que se actualizaba el repositorio.`,
};

export const LEXBOT_AWS_EB: Tech = {
  name: 'AWS Elastic Beanstalk',
  localImage: '/assets/icons/aws-eb.svg',
  description: `AWS Elastic Beanstalk se utilizó para desplegar el backend desarrollado con Spring Boot. A diferencia
  de Amplify, aquí sí toca hacer varias configuraciones manuales para dejar todo funcionando correctamente, especialmente
  el manejo del dominio y HTTPS. Se utilizó el subdominio api.lexbotapp.com para exponer la API y manejar todas las
  peticiones del sistema. Tristemente, actualmente ninguno de estos servicios se encuentra desplegados por razones económicas.`,
};

export const LEXBOT_AWS_ROUTE53: Tech = {
  name: 'AWS Route 53',
  localImage: '/assets/icons/aws-route53.svg',
  description: `AWS Route 53 se utilizó para administrar el dominio lexbotapp.com y todo el manejo de rutas y DNS del
  proyecto. Desde ahí se configuró la conexión entre el dominio principal, el frontend en Amplify y el backend en
  Elastic Beanstalk usando el subdominio api.lexbotapp.com.`,
};

export const LEXBOT_AWS_ACM: Tech = {
  name: 'AWS Certificate Manager',
  localImage: '/assets/icons/aws-cm.svg',
  description: `AWS Certificate Manager se utilizó para generar y administrar los certificados SSL del proyecto.
  En Amplify prácticamente todo quedó configurado automáticamente, pero para el backend desplegado en Elastic Beanstalk
  sí tocó hacer configuraciones adicionales para habilitar HTTPS y asegurar todas las peticiones hacia la API.`,
};
