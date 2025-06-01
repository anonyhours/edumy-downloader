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

🧰 Requisitos Previos

- [Git] Tener previamente instlado git o instalarlo mediante powershell:
```bash
# Sera necesario reinicar visual studio code luego de la instalacion
winget install --id Git.Git -e --source winget
# Validar la version de git
git --version
```
- [Docker] Hyper-V habilitado (necesario para Docker Desktop)

Una vez instalado los requisitos de Git y Docker decargamos o clonamos el repositorio:

#📦 Clonar el Repositorio
    1. Abre una terminal (CMD o PowerShell) y navega al directorio donde deseas clonar el repositorio.
    2. Clona el repositorio de GitHub:
```bash
git clone https://github.com/anonyhours/edumy-downloader.git
cd edumy-downloader
```

#🐳 Construir la Imagen Docker
Dentro del directorio del repositorio clonado, ejecuta el siguiente comando para construir la imagen Docker:

```bash
docker build -t edumy-downloader .
```

#🚀 Ejecutar el Contenedor Docker
Una vez configurados los archivos necesarios, puedes ejecutar el contenedor Docker con el siguiente comando:

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


# Soporte

Si necesitas ayuda para usar el programa, [Discord] anonyhours server or use [GitHub Issues](https://github.com/anonyhours/edumy-downloader/issues)

# Créditos
-   https://github.com/Puyodead1/udemy-downloader - Por el código original en el que se basa este proyecto

## License

All code is licensed under the MIT license
