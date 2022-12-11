# Animal Crossing Wiki ![Hojaacnh 1](https://user-images.githubusercontent.com/92334866/206874302-cefc3bfc-c3e3-4db1-81e3-c9e4687c8ce7.png)

## Trabajo de maquetación para el módulo de diseño de interfaces 
Al iniciarlo por primera vez debemos escribir en la terminal npm run build.

Una vez que ya lo hayamos hecho ponemos en la terminal npm start y nos aparecerá que la aplicación se ha lanzado en el localhost:1234.
Una vez allí podremos visualizar las distintas páginas.

Para acceder a la página de error 404 -> localhost:1234/404.html

## Formas de incluir css.
Existen 2 formas de incluir css de forma directa.
### Estilo inline :
Mediante la etiqueta style dentro del elemento. Ejemplo :

![image](https://user-images.githubusercontent.com/92334866/206875828-56c1ab7a-ffcb-4c48-aaa9-0e35a015a73c.png)

### Incrustado en la cabecera :
Con la etiqueta style en el head. Ejemplo:

![image](https://user-images.githubusercontent.com/92334866/206875862-16b4a2c2-071c-4920-aef8-abdfbce2ed4f.png)

Ambas formas limitan la reutilización de los estilos, para el estilo inline solo tendrá el estilo ese único elemento sin posibilidad reutilizarlo para otro elemento que tenga los mismo estilos, sin embargo si lo incrustamos en la cabecera podremos reutilizar los estilos pero sólo para los elementos de esa página.
Lo recomendado es realizar los estilos en hojas de estilos externas y mediante la etiqueta link asociarlo a las páginas, de este modo puede ser reutilizado en múltiples páginas. Ejemplo:

![image](https://user-images.githubusercontent.com/92334866/206923151-1de1741d-9121-4a4f-af27-fc103b752b67.png)

## Validación del css

![validar-css](https://user-images.githubusercontent.com/92334866/206923222-a6d455ae-39e8-4417-b3c6-e4a37df1f875.png)




















