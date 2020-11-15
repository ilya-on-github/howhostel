import {TextFragment} from "./text-fragment.model";

export interface Course {
    type: string;
    title: string;
    subtitle: TextFragment[];
    description: string;
}
