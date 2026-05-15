import { Tech } from '../../../shared/interfaces/tech.interface';

export const GANECAMP_ANDROID: Tech = {
  name: 'Android',
  localImage: '/assets/icons/android.svg',
  description: `La aplicación se desarrolló únicamente para Android porque la idea principal era aprender desarrollo
  móvil nativo sin complicarme trabajando Android e iOS al mismo tiempo. Sé que existen muchas alternativas
  multiplataforma, pero quería entender primero cómo funciona realmente el desarrollo nativo. A futuro me gustaría
  rehacer la app usando Kotlin Multiplatform, dejando solamente la interfaz en Android con Jetpack Compose y en iOS
  con Swift, para seguir aprendiendo lo nativo pero manteniendo una sola lógica compartida.`,
};

export const GANECAMP_KOTLIN: Tech = {
  name: 'Kotlin',
  localImage: '/assets/icons/kotlin.svg',
  description: `Kotlin fue una de las cosas que más me gustó del proyecto. Se siente como Java (el leguaje que mas sé),
  pero mucho más moderno y cómodo de usar. Las corrutinas me parecieron demasiado buenas para manejar tareas en segundo
  plano y peticiones de forma sencilla. Además, como se parece muchísimo a Java, usarlo fue prácticamente como si
  siempre hubiera programado con él. También trabajé con Jetpack Compose para toda la interfaz y me gustó bastante
  porque me recordó mucho a la forma en la que Angular maneja los componentes. Lo único malo que sentí en ese momento
  fue la documentación, porque cuando hice la app todavía estaba "reciente" y muchas veces ayudaba más buscar en
  Stack Overflow que la propia documentación oficial.`,
};

export const GANECAMP_FIRESTORE: Tech = {
  name: 'Firebase Firestore',
  localImage: '/assets/icons/firebase-firestore.svg',
  description: `Firestore fue la base de datos utilizada en la aplicación. La escogí porque es demasiado fácil de
  integrar en Android y además tiene algo que para este proyecto era súper importante, el soporte offline desde el inicio.
  La aplicación estaba pensada para usarse en zonas donde la conexión a internet puede ser mala o incluso inexistente,
  así que tener sincronización automática y almacenamiento local prácticamente sin configuración fue una ventaja enorme.`,
};

export const GANECAMP_FIREBASE_AUTH: Tech = {
  name: 'Firebase Authentication',
  localImage: '/assets/icons/firebase-auth.svg',
  description: `Firebase Authentication se utilizó para manejar todo el sistema de inicio de sesión y registro de
  usuarios. Desde mi punto de vista es de las mejores opciones para Android porque simplifica muchísimo temas de
  seguridad, autenticación y manejo de usuarios. Además, como ya estaba utilizando Firestore, todo se integraba muy
  fácil y quedaba funcionando bastante rápido.`,
};

export const GANECAMP_RFID: Tech = {
  name: 'RFID',
  localImage: '/assets/icons/rfid.svg',
  description: `La integración con RFID fue como ese extra del proyecto que más me gustó hacer. No quería quedarme
  solamente con un CRUD típico, así que integrar tags RFID le dio mucho más sentido a la aplicación y ayudó realmente
  a resolver el problema principal, manejar grandes cantidades de animales de forma rápida. En vez de buscar animales
  en listas enormes o usar filtros todo el tiempo, simplemente se escanea el tag y automáticamente aparecen los datos
  del animal. Y para registrar uno nuevo también quedó súper cómodo: solo se coloca el tag al animal, se escanea y,
  como todavía no existe en el sistema, simplemente se llena un formulario rápido y listo, el animal queda registrado
  junto con su tag RFID.`,
};
