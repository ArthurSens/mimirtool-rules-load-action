# mimirtool-rules-load-action

## 📚 Usage

### Workflow

Create a `.yml` file in your `.github/workflows` folder (you can find more info about the structure in the [GitHub Docs](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)):

**.github/workflows/example.yml**

```yml
on:
  push:
    branches:
      - main

jobs:
  generate_rules:
    runs-on: ubuntu-latest
    name: Upload rules to mimir
    steps:
      - uses: actions/checkout@v3
      - name: Upload
        uses: ArthurSens/mimirtool-rules-load-action@v1
        with:
          address: ${{ secrets.ADDRESS }}
          id: ${{ secrets.ID }}
          key: ${{ secrets.KEY }}
          user: ${{ secrets.USER }}
          ruleFilesPath: rules/*.yaml
```

## ⚙️ Action Inputs

Here are all the inputs [pyrra-generate-action](https://github.com/ArthurSens/pyrra-generate-action) takes:

| Key | Value | Required | Default |
| ------------- | ------------- | ------------- | ------------- |
| `mimirtoolVersion` | Version of mimirtool used | **No** | 2.5.0 |
| `address` | Address of the Mimir cluster | **yes** | N/A |
| `id` | Mimir tenant ID | **Yes** | N/A |
| `key` | API key to use when contacting Mimir | **Yes** | N/A |
| `user` | API user to use when contacting Mimir | **Yes** | N/A |
| `ruleFilesPath` | Path to rule files that will be uploaded | **Yes** | N/A |