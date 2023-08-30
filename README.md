# Creative Coding Portfolio

This is a HTML page that displays the artworks you created during your Creative Coding course at [Jönköping University](https://www.ju.se).

## How to add a new project

To add a new project, you need to copy or add the JavaScript file into your experiments folder. Next, you open the `data.json` file in your favorite editor (for example Visual Studio Code) and add a new entry to the array. You can just copy the structure:

```json
{
  "file": "experiments/example.js",
  "name": "Name of your experiment",
  "description": "Explains the what and the why. What is the main idea? What is the purpose?",
  "background": "Positions the work in a context by presenting related work and introducing aesthetic or scientific theories related to the work.",
  "github": "https://www.github.com/pixelkind"
}
```

In file, you write the path to the JavaScript file that contains your work. For name, you enter the name of your work. Under description you should explain your concept and the purpose of your work. Under background, you can add some references to related work or aesthetic or scientific theories that relates to your work. And last but not least, you should enter the path to the experiment on GitHub, so others can check out how it works. And don't forget to add the comma between the entries.

If you saved the JSON-file, commited everything and pushed it to GitHub, your changes should be visible online soon :)
