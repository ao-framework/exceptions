const acumen = require("@ao-framework/acumen")

module.exports = {
    concepts: {
        main(environment) {
            acumen.conceptualize(environment)
                .terminalEnvironment(terminal => {
                    terminal.console.throwWhenErrorsPresent(true);
                    terminal.snapshot();
                    terminal.repo.entry("dist/test/main.js")
                })
        },
        dev(environment) {
            acumen.conceptualize(environment)
                .serverEnvironment(server => {
                    server.repo.entry("dist/test/main.js")
                    server.repo.watch("dist/test")
                    server.repo.watch("dist/src")
                    server.repo.coverageOptions({
                        includeDirectories: ["dist/src"],
                        excludeDirectories: ["dist/src/contracts"]
                    })
                    server.port(4000);
                })
        }
    }
}
