# Descarga de cursos udemy con DMR.
## NOTA


- **Esta herramienta no funcionará sin claves de descifrado. ¡La carpeta extension puede ayudar en ello!**
- No preguntes nada de esto. los mensajes seran eliminados
- **Descargar cursos va en contra de los Términos de Servicio de Udemy, ¡NO me hago responsable de que tu cuenta sea suspendida por el uso de este programa!**
- Este programa está en desarrollo, el código se proporciona "tal cual" y no me hago responsable de ningún problema legal resultante del uso de este programa.

## Descripción

Script de utilidad para descargar cursos, tiene soporte para videos con DRM pero requiere que el usuario obtenga la clave de descifrado (por razones legales).  
Windows es el sistema operativo principal de desarrollo, pero he hecho un esfuerzo para soportar Linux también (Mac no probado).

> [!CAUTION]
> ¡La capacidad de descargar subtítulos automáticamente está actualmente rota debido a cambios en la API de Udemy!

> [!IMPORTANT]  
> ¡Esta herramienta no funcionará en cursos encriptados sin que se proporcionen las claves de descifrado!
>
> ¡Descargar cursos va en contra de los Términos de Servicio de Udemy, NO me hago responsable de que tu cuenta sea suspendida por el uso de este programa!
>
> Este programa está en desarrollo, el código se proporciona "tal cual" y no me hago responsable de ningún problema legal resultante del uso de este programa.

## Requisitos

Los siguientes son una lista de herramientas de terceros requeridas:

> [!NOTE]  
> ¡Estos son requisitos separados que no se instalan con el comando pip!
>
> ¡Necesitarás descargarlos e instalarlos manualmente!

- [Python 3](https://python.org/)
- [ffmpeg](https://www.ffmpeg.org/) - También disponible en repositorios de Linux
  - NOTA: Se recomienda usar builds de [yt-dlp](https://github.com/yt-dlp/FFmpeg-Builds/releases/tag/latest)
- [aria2/aria2c](https://github.com/aria2/aria2/) - Disponible en repositorios de Linux, no disponible para windows amenos que sea mediante docker.
- [shaka-packager](https://github.com/shaka-project/shaka-packager/releases/latest)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp/) - También puede instalarse con pip (`pip install yt-dlp`)

## Uso

Necesitarás obtener:
- ID de la clave de descifrado
- Clave de descifrado
- URL del curso de Udemy
- Token de portador (Bearer Token) de Udemy
- Cookies de Udemy (solo para planes de suscripción)

## Listo para empezar

Una vez ejecutado el script. El curso se descargará en `out_dir`.

## Ejemplo/instrucciones de instalacion en Windows mediande Docker

Requisistos
- [Git] Tener previamente instlado git o instalarlo mediante powershell:
```bash
# Sera necesario reinicar visual studio code luego de la instalacion
winget install --id Git.Git -e --source winget
# Validar la version de git
git --version
```
- [Docker] Hyper-V habilitado (necesario para Docker Desktop)

Una vez instalado los requisitos de Git y Docker decargamos o clonamos el repositorio

 

### Ejemplos básicos

```bash
# Descargar curso con token
python main.py -c https://www.udemy.com/course/curso-ejemplo -b TU_TOKEN

# Uso mediante docker en cmd
docker run --rm -it -v "%cd%:/app" {DIR} python main.py -c {URL-CURSO} -b {ACCESS_TOKEN}

# Uso mediante docker en powershell
docker run --rm -it -v "$(Get-Location):/app" {DIR} python main.py -c {URL-CURSO} -b {ACCESS_TOKEN}

# Descargar calidad específica
python main.py -c {URL-CURSO} -q 720

# Descargar subtítulos (inglés)
python main.py -c {URL-CURSO} --download-captions -l en

```
uso: main.py [-h] -c COURSE_URL [-b BEARER_TOKEN] [-q QUALITY] [-l LANG] [-cd CONCURRENT_DOWNLOADS] [--skip-lectures] [--download-assets]
               [--download-captions] [--download-quizzes] [--keep-vtt] [--skip-hls] [--info] [--id-as-course-name] [-sc] [--save-to-file] [--load-from-file]
               [--log-level LOG_LEVEL] [--browser {chrome,firefox,opera,edge,brave,chromium,vivaldi,safari}] [--use-h265] [--h265-crf H265_CRF] [--h265-preset H265_PRESET]
               [--use-nvenc] [--out OUT] [--continue-lecture-numbers]
               [--chapter CHAPTER_FILTER_RAW]

Udemy Downloader

opciones:
  -h, --help            muestra este mensaje de ayuda y sale
  -c COURSE_URL, --course-url COURSE_URL
                        La URL del curso a descargar
  -b BEARER_TOKEN, --bearer BEARER_TOKEN
                        El token de portador a usar
  -q QUALITY, --quality QUALITY
                        Descargar una calidad de video específica. Si la calidad solicitada no está disponible, se usará la calidad más cercana. Si no se especifica, se descargará la mejor calidad para cada lección
  -l LANG, --lang LANG  El idioma para descargar los subtítulos, especifica 'all' para descargar todos los subtítulos (Por defecto es 'en')
  -cd CONCURRENT_DOWNLOADS, --concurrent-downloads CONCURRENT_DOWNLOADS
                        El número máximo de descargas concurrentes para segmentos (HLS y DASH, debe ser un número entre 1-30)
  --skip-lectures       Si se especifica, no se descargarán las lecciones
  --download-assets     Si se especifica, se descargarán los recursos de las lecciones
  --download-captions   Si se especifica, se descargarán los subtítulos
  --download-quizzes    Si se especifica, se descargarán los cuestionarios
  --keep-vtt            Si se especifica, no se eliminarán los archivos .vtt
  --skip-hls            Si se especifica, se omitirán las transmisiones HLS (obtención más rápida) (las transmisiones HLS generalmente contienen calidad 1080p para lecciones sin DRM)
  --info                Si se especifica, solo se imprimirá la información del curso, no se descargará nada
  --id-as-course-name   Si se especifica, el ID del curso se usará en lugar del nombre del curso para el directorio de salida. Esto es un 'hack' para reducir la longitud de la ruta
  -sc, --subscription-course
                        Marcar el curso como un curso basado en suscripción, usa esto si tienes problemas con la detección automática del programa
  --save-to-file        Si se especifica, el contenido del curso se guardará en un archivo que puede cargarse más tarde con --load-from-file, esto puede reducir el tiempo de procesamiento (Nota que los enlaces a los recursos expiran después de cierto tiempo)
  --load-from-file      Si se especifica, el contenido del curso se cargará desde un archivo guardado previamente con --save-to-file, esto puede reducir el tiempo de procesamiento (Nota que los enlaces a los recursos expiran después de cierto tiempo)
  --log-level LOG_LEVEL
                        Nivel de registro: uno de DEBUG, INFO, ERROR, WARNING, CRITICAL (Por defecto es INFO)
  --browser {chrome,firefox,opera,edge,brave,chromium,vivaldi,safari}
                        El navegador del cual extraer las cookies
  --use-h265            Si se especifica, los videos se codificarán con el códec H.265
  --h265-crf H265_CRF   Establecer un valor CRF personalizado para la codificación H.265. El valor predeterminado de FFMPEG es 28
  --h265-preset H265_PRESET
                        Establecer un valor de preset personalizado para la codificación H.265. El valor predeterminado de FFMPEG es medium
  --use-nvenc           Usar la transcodificación por hardware de NVIDIA para H.265. Solo funciona si tienes una GPU NVIDIA compatible y ffmpeg con soporte nvenc
  --out OUT, -o OUT     Establecer la ruta al directorio de salida
  --continue-lecture-numbers, -n
                        Usar numeración continua de lecciones en lugar de por capítulo
  --chapter CHAPTER_FILTER_RAW
                        Descargar capítulos específicos. Usar valores separados por comas y rangos (ej. '1,3-5,7,9-11')

# Support

Si necesitas ayuda para usar el programa, [Discord] anonyhours server or use [GitHub Issues](https://github.com/anonyhours/edumy-downloader/issues)

# Créditos
-   https://github.com/Puyodead1/udemy-downloader - Por el código original en el que se basa este proyecto

## License

All code is licensed under the MIT license
