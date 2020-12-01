import {TextFragment} from "./text-fragment.model";
import {ReactElement} from "react";

export interface Course {
    type: string;
    title: string;
    subtitle: TextFragment[];
    description: string;
    details?: ReactElement;
}
