import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Checkbox, Radio, Select } from '@components/atoms';

type command =
  | 'click'
  | 'mouseOver'
  | 'dragAndDrop'
  | 'assign'
  | 'keypress'
  | 'screenshot'
  | 'eval'
  | 'pause'
  | 'exit'
  | 'open'
  | 'goBack'
  | 'refresh'
  | 'assertElementPresent'
  | 'assertElementNotPresent'
  | 'assertElementVisible'
  | 'assertElementNotVisible'
  | 'assertText'
  | 'assertNotText'
  | 'assertTextPresent'
  | 'assertTextNotPresent'
  | 'assertEval'
  | 'assertAccessibility'
  | 'store'
  | 'extract'
  | 'extractEval';

type condition = {
  statement: string;
  resutl: boolean;
};

type extra = {
  simulated: boolean;
  shift: boolean;
  alt: boolean;
};

type file = {
  filename: string;
  size: number;
  path: string;
  url: string;
};

type step = {
  command: command;
  condition?: condition;
  optional: boolean;
  private: boolean;
  sequence: number;
  target: string;
  value: string;
  variableName: string;
  notes: string;
  extra: extra;
  file: file;
};

type formData = step;

const commandOptions = [
  {
    name: 'Click',
    value: 'click',
    section: 'Mouse',
  },
  {
    name: 'Mouse over',
    value: 'mouseOver',
    section: 'Mouse',
  },
  {
    name: 'Drag and Drop',
    value: 'dragAndDrop',
    section: 'Mouse',
  },
  {
    name: 'Assign',
    value: 'assign',
    section: 'Keyboard',
  },
  {
    name: 'Keypress',
    value: 'keypress',
    section: 'Keyboard',
  },
  {
    name: 'Capture Screenshot',
    value: 'screenshot',
    section: 'Other',
  },
  {
    name: 'Execute Javascript',
    value: 'eval',
    section: 'Other',
  },
  {
    name: 'Pause (time in ms)',
    value: 'pause',
    section: 'Other',
  },
  {
    name: 'Exit Test',
    value: 'exit',
    section: 'Other',
  },
  {
    name: 'Go to URL',
    value: 'open',
    section: 'Navigation',
  },
  {
    name: 'Go Back',
    value: 'goBack',
    section: 'Navigation',
  },
  {
    name: 'Refresh',
    value: 'refresh',
    section: 'Navigation',
  },
  {
    name: 'Element is present',
    value: 'assertElementPresent',
    section: 'Assertion',
  },
  {
    name: 'Element is not present',
    value: 'assertElementNotPresent',
    section: 'Assertion',
  },
  {
    name: 'Element is visible',
    value: 'assertElementVisible',
    section: 'Assertion',
  },
  {
    name: 'Element is not visible',
    value: 'assertElementNotVisible',
    section: 'Assertion',
  },
  {
    name: 'Element text equals',
    value: 'assertText',
    section: 'Assertion',
  },
  {
    name: 'Elment text does not equals',
    value: 'assertNotText',
    section: 'Assertion',
  },
  {
    name: 'Element text contain',
    value: 'assertTextPresent',
    section: 'Assertion',
  },
  {
    name: 'Element text does not contain',
    value: 'assertTextNotPresent',
    section: 'Assertion',
  },
  {
    name: 'JavaScript returns true',
    value: 'assertEval',
    section: 'Assertion',
  },
  {
    name: 'Check accessibility',
    value: 'assertAccessibility',
    section: 'Assertion',
  },
  {
    name: 'Set variable',
    value: 'store',
    section: 'Store Variables',
  },
  {
    name: 'Extract from element',
    value: 'extract',
    section: 'Store Variables',
  },
  {
    name: 'Extract from JavaScript',
    value: 'extractEval',
    section: 'Store Variables',
  },
];

const checkAccessibilityOptions = [
  {
    name: 'Fail  critical issues are found',
    value: '1',
  },
  {
    name: 'Fail if serious or critical issues are found',
    value: '2',
  },
  {
    name: 'Fail if moderate, serious, or critical issues are found',
    value: '3',
  },
  {
    name: 'Fail if any issues are found, including minor issues',
    value: '4',
  },
];

export type props = {
  addStep: (step: step) => void
};
const CardStep: React.FC<props> = ({ addStep }) => {
  const { register, watch } = useForm<formData>({
    defaultValues: {
      command: 'click',
      optional: false,
      value: '',
    },
  });
  const step = watch();
  console.log(step);
  const noValueList = [
    'mouseOver',
    'screenshot',
    'goBack',
    'refresh',
    'assertElementPresent',
    'assertElementNotPresent',
    'assertElementVisible',
    'assertElementNotVisible',
  ];
  const selectValueList = ['keypress', 'assertAccessibility'];
  const textValueList = [];

  return (
    <div className="flex flex-col space-y-5 border-l-4 card border-l-primary-500">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
        placeholder="Element CSS or XPath selector"
        {...register('target')}
      />
      <div className="grid grid-cols-2 gap-5">
        <Select options={commandOptions} fullWidth={true} {...register('command')} />
        {!noValueList.includes(step.command) && (
          <>
            {step.command == 'click' ? (
              <div className="flex flex-wrap items-center h-full space-x-5">
                <Radio label="Left click" value="" {...register('value')} />
                <Radio label="Right click" value="1" {...register('value')} />
                <Radio label="Double click" value="2" {...register('value')} />
              </div>
            ) : step.command == 'keypress' ? (
              <Select options={commandOptions} {...register('value')} fullWidth={true} />
            ) : step.command == 'exit' ? (
              <div className="flex flex-wrap items-center h-full space-x-5">
                <Radio label="Passing" value="passing" {...register('value')} />
                <Radio label="Failing" value="failing" {...register('value')} />
              </div>
            ) : step.command == 'assertAccessibility' ? (
              <Select options={checkAccessibilityOptions} {...register('value')} fullWidth={true} />
            ) : (
              <TextField
                placeholder={step.command == 'dragAndDrop' ? 'Element selector (Drop area)' : 'Input value'}
                fullWidth={true}
                {...register('value')}
              />
            )}
          </>
        )}
      </div>
      <Checkbox label="Make this step optional (Continue on failure)" {...register('optional')} />
    </div>
  );
};

export default CardStep;
