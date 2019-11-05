function generatorComponent(plop) {
  plop.setGenerator('component', {
    description: 'generator component structure',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Ex.: Header, TodoList'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.jsx',
      templateFile: '.plop/component/Component.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.stories.js',
      templateFile: '.plop/component/Component.stories.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.test.js',
      templateFile: '.plop/component/Component.test.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.module.scss',
      templateFile: '.plop/component/Component.styles.hbs'
    }]
  });
}

function generatorModel(plop) {
  plop.setGenerator('model', {
    description: 'generator model structure ',
    prompts: [{
      type: 'input',
      name: 'fileName',
      message: 'fileName Ex.: Tools, Users'
    }, {
      type: 'input',
      name: 'reducerName',
      message: 'reducerName Ex.: tools, usersList'
    }],
    actions: [{
      type: 'add',
      path: 'src/models/{{fileName}}/{{fileName}}.model.js',
      templateFile: '.plop/model/Model.hbs'
    }, {
      type: 'add',
      path: 'src/models/{{fileName}}/{{fileName}}.effects.js',
      templateFile: '.plop/model/Model.effects.hbs'
    }, {
      type: 'add',
      path: 'src/models/{{fileName}}/{{fileName}}.test.js',
      templateFile: '.plop/model/Model.test.hbs'
    }]
  });
}

function generatorContainer(plop) {
  plop.setGenerator('container', {
    description: 'generator container structure',
    prompts: [{
      type: 'input',
      name: 'folder',
      message: 'folderName Ex.: Tools, Users'
    },{
      type: 'input',
      name: 'name',
      message: 'nameComponent Ex.: Header, TodoList'
    }],
    actions: [{
      type: 'add',
      path: 'src/containers/{{folder}}/{{name}}.jsx',
      templateFile: '.plop/container/Container.hbs'
    }, {
      type: 'add',
      path: 'src/containers/{{folder}}/__tests__/{{name}}.test.js',
      templateFile: '.plop/container/Container.test.hbs'
    }]
  });
}

module.exports = function (plop) {
  generatorComponent(plop);
  generatorModel(plop);
  generatorContainer(plop);
};