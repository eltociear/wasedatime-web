import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Modal, Button, Icon } from "semantic-ui-react";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import {
  getUserAttr,
  signIn,
  signOut,
} from "@bit/wasedatime.core.ts.utils.user";

const StyledModal = styled(Modal)`
  text-align: center !important;
  font-family: Segoe UI, Yu Gothic Medium, Lato !important;
  font-display: swap;
  font-size: 1.2em !important;
  ${media.phone`font-size: 1.4rem !important;`}
`;

const SignInModal = ({ isModalOpen, closeModal, t }) => {
  return (
    <StyledModal
      onClose={closeModal}
      open={isModalOpen}
      style={{
        borderRadius: "27px",
      }}
    >
      <Modal.Header
        style={{
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
        }}
      >
        <h1>{t(`user.Sign in`)}</h1>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>{t(`user.sign in description`)}</p>
          <Button
            color="red"
            onClick={signIn}
            style={{
              fontSize: "1.4em",
              padding: "0.5em",
              marginLeft: "0",
              background: "#b51e36",
              borderRadius: "30px",
            }}
            icon
            labelPosition="left"
          >
            <Icon name="google" />
            {t(`user.Sign in with WasedaMail`)}
          </Button>
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions
        style={{
          textAlign: "center",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "25px",
        }}
      >
        <p style={{ marginBottom: "0.5rem", color: "#888" }}>
          {t(`user.agreement on privacy policy 1`)}
          <a href="/privacy-policy">{t(`user.Privacy Policy`)}</a>
          {t(`user.agreement on privacy policy 2`)}
          <a href="/terms-of-service">{t(`user.Terms of Service`)}</a>
          {t(`user.agreement on privacy policy 3`)}
        </p>
      </Modal.Actions>
    </StyledModal>
  );
};

export default withTranslation("translation")(SignInModal);