import styles from './Error.module.scss';

export type ErrorMessage = {
  message: string;
};

export const Error = (props: ErrorMessage) => {
  return <div className={styles.error}>{props.message}</div>;
};
