import { createAction, props } from '@ngrx/store';

export const updateCardContent = createAction(
    '[CARDS] Update card Content',
    props<{ dolorContent: any, ipsumContent: any, leromContent: any }>()
);
