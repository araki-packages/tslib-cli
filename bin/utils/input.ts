import * as inquirer from "inquirer"

export const readLineString = async (message: string, defaultValue: string): Promise<string> => {
  const defaultFieald = 'input';
  const result =  await inquirer.prompt<{input: string}>([{
    type: 'input', 
    message: message, 
    name: defaultFieald,
    default: () => defaultValue
  }]);
  return result.input;
}