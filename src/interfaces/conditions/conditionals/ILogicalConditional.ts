import {LogicalOperator} from "../../../enums/LogicalOperator";

export interface ILogicalConditional {

    readonly logicalOperator: LogicalOperator;

    readonly value: any[];

}
