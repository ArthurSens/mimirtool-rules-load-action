const core = require('@actions/core')
const download = require('download');
const shell = require('shelljs')

run()

async function run() {
    try {
        const mimirtoolVersion = core.getInput('mimirtoolVersion')
        const address = core.getInput('address')
        const id = core.getInput('id')
        const key = core.getInput('key')
        const user = core.getInput('user')
        const ruleFilesPath = core.getInput('ruleFilesPath')

        await downloadMimirtool(mimirtoolVersion)
        const { stderr, code } = shell.exec(`/tmp/mimirtool/mimirtool-linux-amd64 rules load --address ${address} --id ${id} --key ${key} --user ${user} ${ruleFilesPath}`)
        if (code != 0) {
            core.setFailed(stderr)
        }
    } catch (err) {
        core.setFailed(err.message)
    }
}

async function downloadMimirtool(version) {
    console.log(`Starting download of mimirtool: https://github.com/grafana/mimir/releases/download/mimir-${version}/mimirtool-linux-amd64`)

    try {
        await download(`https://github.com/grafana/mimir/releases/download/mimir-${version}/mimirtool-linux-amd64`, '/tmp/mimirtool')
        console.log('Mimirtool download Completed')
        shell.exec('chmod +x /tmp/mimirtool/mimirtool-linux-amd64')
    } catch (err) {
        console.log(`Failed to download mimirtool: ${err}`)
        core.setFailed(err.message)
    }
}