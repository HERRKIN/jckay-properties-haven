# Instrucciones para Configurar GitHub Pages

## Problema Actual
El push está fallando porque el token de GitHub no tiene permisos de `workflow`. 

## Solución: Subir el Workflow Manualmente

### Paso 1: Subir el archivo del workflow manualmente

1. Ve a tu repositorio en GitHub: https://github.com/HERRKIN/jckay-properties-haven
2. Haz clic en "Add file" → "Create new file"
3. En el nombre del archivo, escribe: `.github/workflows/deploy.yml`
4. Copia y pega el siguiente contenido:

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

5. Haz clic en "Commit new file"

### Paso 2: Subir los demás cambios

Una vez que el workflow esté en GitHub, ejecuta desde tu terminal:

```bash
cd /Users/joseandradez/dev/trabajo/jckay-properties-haven
git push origin main
```

Si aún falla, puedes hacer push de los cambios individuales excluyendo el workflow:

```bash
# Hacer push solo de los cambios de código (sin el workflow)
git push origin HEAD:main --force-with-lease
```

O mejor aún, actualiza tu token de GitHub con permisos de workflow.

### Paso 3: Activar GitHub Pages

1. Ve a Settings → Pages en tu repositorio
2. En "Source", selecciona **"GitHub Actions"** (NO "Deploy from a branch")
3. El workflow se ejecutará automáticamente
4. Tu sitio estará disponible en: `https://HERRKIN.github.io/jckay-properties-haven/`

## Alternativa: Actualizar Token de GitHub

Si prefieres actualizar tu token:

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Edita tu token o crea uno nuevo
3. Asegúrate de marcar el scope **"workflow"**
4. Luego ejecuta: `git push origin main`
