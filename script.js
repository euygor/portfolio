const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = [
    { name: 'sobre', description: 'Dedicado a superar desafios técnicos, estou comprometido em entregar produtos de alta qualidade que atendam não apenas às expectativas, mas também excedam as necessidades dos clientes, impulsionando o sucesso e a satisfação.' },
    {
        name: 'contatos', description: `
        - <a href="mailto:ygor.oliveiragb@gmail.com">E-mail</a>
        - <a href="https://wa.me/5587991047609?text=Olá Ygor, Desejo fazer um orçamento." target="_blank">WhatsApp</a>
        - <a href="https://www.linkedin.com/in/euygor" target="_blank">LinkedIn</a>
    ` },
    { name: 'curriculo', description: 'Confira e faça o download do meu <a href="./Currículo Ygor Oliveira.pdf" target="_blank">Currículo</a>' },
    { name: 'projetos', description: 'Confira meus projetos no <a href="https://github.com/euygor" target="_blank">GitHub</a>.' },
    { name: 'servicos', description: 'Desenvolvimento de websites, sistemas e aplicativos, bem como a realização de manutenções, análises e muito mais.' },
    {
        name: 'tecnologias', description: `
        - HTML5
        - CSS3
        - JavaScript
        - Node
        - Vue
        - React
        - React Native
        - TypeScript
        - PHP
        - Laravel
        - MySQL
        - Python
        - Java
        - Git
        - GitHub
    ` },
    { name: 'limpar', description: '' },
];

function showHelp() {
    output.innerHTML += 'Comandos disponíveis:\n\n';
    commands.forEach(command => {
        output.innerHTML += `${command.name}\n`;
    });
}

function clearTerminal() {
    output.innerHTML = '';
    showHelp();
}

function executeCommand(commandName) {
    const lowerCaseCommand = commandName.toLowerCase();
    if (lowerCaseCommand === 'limpar') {
        clearTerminal();
    } else {
        const selectedCommand = commands.find(command => command.name === lowerCaseCommand);

        if (selectedCommand) {
            output.innerHTML += `\n$ ${selectedCommand.name}\n${selectedCommand.description}\n`;
        } else {
            output.innerHTML += `\nComando não encontrado: ${commandName}\n`;
        }
    }

    input.focus();
}

document.addEventListener('click', () => {
    input.focus();
});

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = input.value.trim();
        input.value = '';
        executeCommand(command);
        input.scrollIntoView();
    }
});

function scrollTerminal(event) {
    const terminal = document.querySelector('.terminal');
    terminal.scrollTop += event.deltaY;
}

document.querySelector('.terminal').addEventListener('wheel', scrollTerminal);

input.focus();
showHelp();
