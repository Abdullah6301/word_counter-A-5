#! usr/bin/ env node

import inquirer from 'inquirer';

    const answer = await inquirer.prompt([
        {
            name: 'paragraph',
            message: 'Enter an English paragraph:',
            type: 'input'
        }
    ]);

    const paragraph = answer.paragraph;

    const Whitespaces = paragraph.replace(/\s+/g, ''); // Remove all whitespaces

    const characterCount = Whitespaces.length;

    const wordCount = paragraph.trim().split(/\s+/).filter((word: string) => word.length > 0).length; // Trim and split by whitespaces

    console.log(`Character count (excluding whitespaces): ${characterCount}`);
    console.log(`Word count (excluding whitespaces): ${wordCount}`);
