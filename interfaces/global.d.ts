import * as firebase from 'firebase';

declare global {
  namespace Enjineer {

    interface IAddress {
      autocomplete?: string,
      street: string,
      unit?: string,
      city: string,
      state: string | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY",
      zip: string,
      country?: string
    }

    namespace User {

      export interface ISession extends firebase.User {

      }

      export interface IQueryDocumentSnapshot extends firebase.firestore.QueryDocumentSnapshot {
        data(options?: firebase.firestore.SnapshotOptions): IDocument;
      }

      export interface IColllection extends firebase.firestore.QuerySnapshot {
        readonly docs: IQueryDocumentSnapshot[];
      }

      export interface ISavedCard {
        /**
         * The brand of the card
         */
        brand: string,
        /**
         * The expiration information of the card
         */
        expiration: {
          month: number,
          year: number
        },
        /**
         * The ID of the card on Stripe
         */
        id: string,
        /**
         * The last 4 digits of the card number
         */
        last4: string,
        /**
         * The name of the saved card
         */
        name: string
      }

      export interface IDocument {
        /**
         * The email address for the user
         */
        email?: string,
        /**
         * The user's first name
         */
        firstName?: string,
        /**
         * The user's last name
         */
        lastName?: string,

        /**
         * If the user is registered on TrackMyGiving
         */
        isRegistered?: boolean,
        /**
         * A profile picture for the user
         */
        photo?: string,
        /**
         * The user's permission set on Refer A Flood
         */
        role?: string,
        /**
         * The user's phone number
         */
        phone?: string,
        /**
         * Stripe information for the user
         */
        stripe?: {
          /**
           * A map object of accounts for the user {businessId: customerId} 
           */
          accounts: any,
          /**
           * A list of saved cards for the user
           */
          cards: ISavedCard[],
          /**
           * The user's customer ID for Refer A Flood's Stripe
           */
          customerId: string
        },
        /**
         * A list of businesses the user is tied to
         */
        businesses?: any,
        /**
         * The user's physical address
         */
        address?: IAddress,
        /**
         * The user's default billing address
         */
        billingAddress?: IAddress,
        /**
         * The user's donation totals
         */
        total?: any
      }

      export interface IDocumentWithId extends IDocument {
        /**
         * The unique ID of the user
         */
        id?: string
      }

      export interface IDocumentSnapshot extends firebase.firestore.DocumentSnapshot {
        data(options?: firebase.firestore.SnapshotOptions): IDocument;
      }
      export interface IDocumentReference extends firebase.firestore.DocumentReference {
        get(): Promise<IDocumentSnapshot>
      }
    }
  }
}