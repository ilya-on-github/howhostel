import {TextFragment} from "./text-fragment.model";

export interface Study {
    type: string;
    title: string;
    subtitle: TextFragment[];
    description: string;
}
