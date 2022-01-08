function solution(numbers: number[]): number[] {
    let outputResult: number[] = [];
    if (!isTripleValid(numbers)) {
      outputResult.push(0);
      return outputResult;
    }
  
    outputResult = processZigZag(numbers);
  
    return outputResult;
  }
  
  function processZigZag(numbers: number[]): number[] {
    let output: number[] = [];
  
    let loopAmount = getLoopAmount(numbers);
  
    for (let index = 0; index < loopAmount; index++) {
      if (isZigZagOperable(index, numbers)) {
        let a = numbers[index];
        let b = numbers[index + 1];
        let c = numbers[index + 2];
        let result = isZigZag(a, b, c);
        output.push(result);
        console.log(output);
      }
    }
  
    return output;
  }
  
  function isZigZagOperable(index: number, numbers: number[]) {
    let result = false;
    if (!numbers) {
      throw new Error("No number array found");
    }
  
    try {
      let a = numbers[index];
      let b = numbers[index + 1];
      let c = numbers[index + 2];
      if (a && b && c) {
        result = true;
      }
    } catch (error) {
      console.log(error);
    }
  
    return result;
  }
  
  function isZigZag(a: number, b: number, c: number): number {
    let result = 0;
    if (a && b && c) {
      let resultCondition1 = isZigZagV1(a, b, c);
      let resultCondition2 = isZigZagV2(a, b, c);
  
      if (resultCondition1 || resultCondition2) {
        result = 1;
      }
    }
  
    return result;
  }
  
  function isZigZagV1(a: number, b: number, c: number): boolean {
    let resultCondition = false;
    if (a && b && c) {
      let condition1 = a < b;
      let condition2 = b > c;
      resultCondition = condition1 && condition2;
    }
  
    return resultCondition;
  }
  
  function isZigZagV2(a: number, b: number, c: number): boolean {
    let resultCondition = false;
  
    if (a && b && c) {
      let condition1 = a > b;
      let condition2 = b < c;
      resultCondition = condition1 && condition2;
    }
  
    return resultCondition;
  }
  
  function getLoopAmount(numbers: number[]): number {
    if (!numbers) {
      throw new Error("No number array found");
    }
  
    return numbers.length - 2;
  }
  
  function isTripleValid(numbers: number[]): boolean {
    let result = false;
  
    if (numbers && numbers.length > 3) {
      result = true;
    }
  
    return result;
  }
