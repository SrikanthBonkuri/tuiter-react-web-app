import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import WorkingWithFunctions from "./working-with-functions";
import WorkingWithArrays from "./working-with-arrays";
import TemplateLiterals from "./template-literals";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/><br />
          <VariableTypes/><br />
          <BooleanVariables/><br />
          <IfElse/><br />
          <TernaryOperator/><br />
          <WorkingWithFunctions/><br />
          <WorkingWithArrays/><br />
          <TemplateLiterals/><br />
          <House/><br />
          <Spread/><br />
          <Destructing/><br />
          <FunctionDestructing/><br />
       </div>
    );
 }
 export default JavaScript