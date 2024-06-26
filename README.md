# mavedb-ui

UI for the MaveDB website at [mavedb.org](https://www.mavedb.org). MaveDB is a biological database
for Multiplex Assays of Variant Effect (MAVE) datasets.

For more information about MaveDB or to cite MaveDB please refer to the
[MaveDB paper in Genome Biology](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1845-6).
## Build and deployment

### Prerequisites

#### For development

Your development environment will need to have the following software installed.

- Node.js, version 20.

  https://nodejs.org/en/download/

  In addition to the installer packages, Node.js is also available through many package managers, such as Homebrew for macOS.

  Node.js includes the package manager NPM.

#### For deployment

- AWS command-line interface (AWS CLI) ([https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html))

  If you are a macOS user, notice that in addition to the procedure suggested by AWS, you may also choose to install the AWS CLI via Homebrew: [https://formulae.brew.sh/formula/awscli](https://formulae.brew.sh/formula/awscli)

### Installing dependencies

In the project root directory, run

```
npm install
```

to install all project dependencies.

### Running locally in development

In development, this Vue.js application is served by Vite, which supports hot reload of updated components.

To start the application for local development, run this command from the project root directory:

```
npm run dev
```

In development mode, the application will look for a local server running the MaveDB API at `http://localhost:8002`.
If you would like to use the live MaveDB API server at `https://mavedb.org` while still having internal links resolve
to the development environment, run:
```
MODE=prodapi npm run dev
```

If you would like internal links to resolve to the live MaveDB site at `https://mavedb.org`, run:

```
MODE=live npm run dev
```

### Building for production

In production, the application is a static web application bundled using Rollup.

To build for production, run:

```
npm run build
```

in the project root directory. The result is generated in the `dist` subdirectory, and the contents of `dist` can be deployed as static files on any web server.

If you want to preview the production build, run:

```
npm run preview
```

This will automatically rebuild the files in `dist` on any changes.

This command will by default use the live MaveDB API server at `https://mavedb.org`. To use a local API instance instead, run:

```
MODE=dev npm run preview
```

To use the live MaveDB API server at `https://mavedb.org` while still using local internal site links, run:

```
MODE=prodapi npm run preview
```

### Deploying in production

#### Prerequisites

- Set up your AWS command-line interface (AWS CLI) credentials.

  Please see [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) for instructions.

  You may also find it convenient to use named profiles if you use more than one AWS account: [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

#### Procedure

To deploy in production, simply push the contents of `dist` to the appropriate S3 bucket:

```
aws s3 sync ./dist s3://mavedb-ui
```

### Updating the documentation

To update the documentation, first install `sphinx`:

```
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

and then build a new version of the documentation with:

```
sphinx-build -b html src/docs/mavedb public/docs/mavedb
```

### Updating Typescript types for the API

We use `openapi-typescript` to provide Typescript types for our API. To update these types from the live version of the API, run:

```
npx openapi-typescript https://api.mavedb.org/openapi.json -o src/schema/openapi.d.ts
```

To update these types from a locally running `mavedb-api` server for development, instead run:

```
npx openapi-typescript http://localhost:8002/openapi.json -o src/schema/openapi.d.ts
```
