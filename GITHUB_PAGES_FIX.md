# Solución al error "Get Pages site failed" / "HttpError: Not Found"

Ese error aparece cuando **GitHub aún no tiene “creado” el sitio de Pages** para el repo. Hay que “inicializar” Pages desde la interfaz una vez.

## Pasos (hazlos en este orden)

### 1. Entra a la configuración de Pages
- Repo: https://github.com/HERRKIN/jckay-properties-haven  
- **Settings** → en el menú izquierdo **Pages**

### 2. Fuente en "GitHub Actions"
- En **Build and deployment** → **Source**
- Debe estar: **GitHub Actions**
- Si no lo está, elígelo y guarda (si hay botón Save).

### 3. Crear el sitio la primera vez (lo que quita el error)
GitHub a veces no crea el “Pages site” hasta que se hace un deploy desde la UI:

- En la misma página de **Pages**, en **Suggested workflows**
- Pulsa **Configure** en **"Static HTML"**
- Se abrirá un commit que crea un workflow `.github/workflows/jekyll-html.yml` (o similar)
- Haz **Commit** a `main` (puedes cambiar el nombre del workflow si quieres)
- Espera 1–2 minutos y ve a la pestaña **Actions**: se ejecutará ese workflow y hará el primer deploy a Pages. Eso “crea” el sitio.
- Cuando termine, **opcional**: puedes borrar ese workflow y quedarte solo con tu `deploy.yml` (tu sitio seguirá sirviendo desde tu workflow).

### 4. Volver a ejecutar tu workflow
- Pestaña **Actions** → workflow **"Deploy to GitHub Pages"**
- **Run workflow** → Run workflow  
O haz un pequeño cambio en el repo y push a `main` para que se dispare solo.

### 5. Comprobar la URL
- **Settings** → **Pages**: cuando el deploy termine, debería aparecer la URL, por ejemplo:  
  `https://HERRKIN.github.io/jckay-properties-haven/`

---

## Si el error sigue

- **Repositorio de organización**: un admin debe tener Pages permitido en la política del org (Settings de la organización → Pages).
- **Permisos del workflow**: en `.github/workflows/deploy.yml` debe haber:
  - `pages: write`
  - `id-token: write`
- **Estado de GitHub**: revisa https://www.githubstatus.com por incidencias en Pages/Actions.

Resumen: el error se soluciona **habilitando Pages en Settings** y haciendo **un primer deploy** (por ejemplo con “Configure” de Static HTML); después tu workflow `deploy.yml` ya podrá desplegar sin ese error.
