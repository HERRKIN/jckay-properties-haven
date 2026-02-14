# Guía Completa: Configurar GitHub Pages

## ¿Qué es lo que necesitamos hacer?

Tu sitio web necesita desplegarse en GitHub Pages para que tu cliente pueda verlo. Hay 2 pasos principales:

1. **Subir el archivo del workflow** (el "motor" que despliega automáticamente)
2. **Activar GitHub Pages** en la configuración del repositorio

---

## Paso 1: Subir el archivo del workflow

**Problema actual:** El archivo del workflow no se puede subir automáticamente porque tu token de GitHub no tiene permisos de "workflow".

**Solución:** Subirlo manualmente desde la interfaz de GitHub.

### Instrucciones:

1. **Abre tu repositorio en GitHub:**
   - Ve a: https://github.com/HERRKIN/jckay-properties-haven

2. **Crea la carpeta y el archivo:**
   - Haz clic en el botón **"Add file"** (arriba a la derecha)
   - Selecciona **"Create new file"**

3. **Escribe el nombre del archivo:**
   - En el campo de nombre, escribe exactamente: `.github/workflows/deploy.yml`
   - GitHub creará automáticamente la carpeta `.github/workflows/` si no existe

4. **Copia y pega este contenido:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. **Haz commit:**
   - Desplázate hacia abajo en la página
   - Escribe un mensaje de commit (ej: "Add GitHub Pages workflow")
   - Haz clic en **"Commit new file"** (botón verde)

---

## Paso 2: Activar GitHub Pages

Una vez que el archivo esté subido:

1. **Ve a la configuración del repositorio:**
   - En tu repositorio, haz clic en **"Settings"** (pestaña superior)
   - En el menú lateral izquierdo, busca y haz clic en **"Pages"**

2. **Configura la fuente:**
   - En la sección **"Source"**, verás un dropdown
   - Selecciona **"GitHub Actions"** (NO selecciones "Deploy from a branch")
   - Guarda los cambios si es necesario

---

## Paso 3: Subir los demás cambios del código

Después de subir el workflow manualmente, necesitas subir los cambios del código:

1. **Abre tu terminal**
2. **Ejecuta estos comandos:**

```bash
cd /Users/joseandradez/dev/trabajo/jckay-properties-haven
git push origin main
```

Si aún falla por permisos, puedes:
- Actualizar tu token de GitHub con permisos de "workflow"
- O hacer push desde tu terminal con tus credenciales de GitHub

---

## ¿Qué pasa después?

Una vez que completes estos pasos:

✅ **El workflow se ejecutará automáticamente** cada vez que hagas push a `main`
✅ **Tu sitio se desplegará automáticamente** en GitHub Pages
✅ **La URL de tu sitio será:** `https://HERRKIN.github.io/jckay-properties-haven/`

**Nota:** La primera vez puede tardar unos minutos en completarse. Puedes ver el progreso en la pestaña "Actions" de tu repositorio.

---

## Resumen rápido:

1. ✅ Subir `.github/workflows/deploy.yml` manualmente en GitHub
2. ✅ Ir a Settings → Pages → Seleccionar "GitHub Actions"
3. ✅ Hacer push de los demás cambios: `git push origin main`
4. ✅ Esperar a que el workflow termine (ver en pestaña "Actions")
5. ✅ Tu sitio estará en: `https://HERRKIN.github.io/jckay-properties-haven/`

---

## ¿Necesitas ayuda?

Si tienes problemas en algún paso, avísame y te ayudo a resolverlo.
