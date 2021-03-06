import { SequencePart } from "./SequencePart";
import { ISequenceJoin } from "./interfaces/ISequenceJoin";
import { Join } from "./enums/Join";
import { SequenceCondition } from "./conditions/SequenceCondition";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { LogicalOperator } from "./enums/LogicalOperator";
import { StringBuilder } from "@gallink/oxygen";
export declare class SequenceJoin extends SequencePart implements ISequenceJoin {
    readonly join: Join;
    readonly location: string;
    condition: SequenceCondition;
    protected builder: StringBuilder;
    constructor(join: Join, location: string);
    on(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this;
    onIn(column: ISequenceColumn, ...values: any[]): void;
    onNotIn(column: ISequenceColumn, ...values: any[]): void;
    stringify(): string;
    protected static stringifyJoin(joinType: Join): string;
}
