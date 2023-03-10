# get-package-manager

> Get which package manager you're using (yarn or pnpm or npm)

## Usage

Create `.github/workflows/get-package-manager.yml` in the default branch:

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: wow-actions/get-package-manager@v1
    id: getpm
  - run: |
    echo "Package manager in use: ${{ steps.getpm.outputs.pm }}"
```
## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).
