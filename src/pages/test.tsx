import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@components/atoms';
import { CardStep } from '@components/molecules';
import DraggableList from 'react-draggable-list';
import type { Test } from '@ctypes/graphql';

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

type formData = {
  startUrl: string;
};

const test = () => {
  const { register, handleSubmit } = useForm();
  const [steps, setSteps] = useState<step[]>([]);

  const onSubmit = async () => {};
  const addStep = (step: step) => setSteps((prv) => [...prv, step]);

  return (
    <div>
      <form className="px-5 mx-auto mt-10 max-w-7xl" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          placeholder="Start url"
          {...register('startUrl')}
        />
        <div className="flex flex-col mt-5 space-y-5"></div>
        <Button />
      </form>
    </div>
  );
};

export default test;
