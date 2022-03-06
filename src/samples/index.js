import Images from 'simput/src/samples/images';

// prettier-ignore
export default [
  {
    label: 'Oscillator',
    image: Images.oscillator,
    description: 'Oscillator source for In-Situ simulation',
    acknowledgement: 'Example by Kitware Inc.',
    model: {
      type: 'oscillator',
      data: {},
    },
  },
  {
    label: 'Address book',
    icon: 'mdi-contact-mail',
    description: 'Address book which generate vcs files',
    acknowledgement: 'Example by Kitware Inc.',
    model: {
      type: 'vcard',
      data: {},
    },
  },
  {
    label: 'OpenFOAM periodic',
    image: Images.OpenFOAM,
    description: 'Simple OpenFOAM input files case manager',
    acknowledgement: 'Example by OpenFOAM community. (Robert Sawko)',
    model: {
      type: 'openfoam-periodic',
      data: {},
    },
  },
  {
    label: 'PyFr',
    icon: 'mdi-weather-windy',
    description: 'PyFR is an open-source Python based framework for solving advection-diffusion type problems on streaming architectures using the Flux Reconstruction approach of Huynh.',
    acknowledgement: 'Example by Kitware Inc.',
    model: {
      type: 'pyfr',
      data: {},
    },
  },
  {
    label: 'Vera',
    icon: 'mdi-battery-charging',
    description: 'Vera offer a common format as input for several Light-Water Reactors code from Consortium for Advanced Simulation of Light-Water Reactors',
    acknowledgement: 'Example by Kitware Inc. using vtk.js for its 3D views',
    model: {
      type: 'vera',
      data: {},
    },
  },
  {
    label: 'Create your own model type',
    icon: 'mdi-file-plus',
    description: 'Click here to learn how to create your own type.',
    goTo: 'http://kitware.github.io/simput/docs/vcard.html'
  },
  {
    label: 'zCFD Visualiser',
    image: Images.zCFD,
    description: 'Application to view geometry and intuitively apply initial/boundary conditions.',
    acknowledgement: 'Zenotech',
    model: {
      type: 'zcfd',
      data: {},
    },
  },
  // {
  //   label: 'Demo',
  //   icon: 'bug_report',
  //   model: {
  //     type: 'demo',
  //     data: {},
  //   },
  // },
  // {
  //   label: 'Test',
  //   icon: 'bug_report',
  //   model: {
  //     type: 'test',
  //     data: {},
  //   },
  // },
];
